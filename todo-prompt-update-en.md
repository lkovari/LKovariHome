# Prompt: upsert knowledge-base access logs

Use this prompt as-is (or paste it into a new agent turn) to implement the access-log upsert. Do not commit unless the user explicitly asks.

---

Implement upsert for Firestore `accessLogs` in this Angular 22 app (`LKovariHome`). Workspace: the current repo. Follow existing project rules: **no comments in source code**, **no TypeScript type assertions**. Do not commit unless asked. Update `CHANGELOG.md` and `README.md` in English, marked **Released / Deployed**, matching the existing knowledge-base changelog style.

## Desired behaviour

Collection: `accessLogs` in Firebase project `knowledgebase-store`.

Natural key: **`email` + `locale` + `knowledgeBaseId`**.

1. If no document exists for that triple, **insert** a new row: `email`, `locale`, `knowledgeBaseId`, `viewedAt` = server now.
2. If a document already exists for that triple, **update only `viewedAt`** to the current server time. Do not create a second row. Do not change `email`, `locale`, or `knowledgeBaseId`.

Same email on Angular vs .NET (`knowledgeBaseId` `angular` | `dotnet`) stays two rows. Same email with a different `navigator.language` stays a separate row.

Logging still runs **after** Markdown is on screen, must **not** hold the wait spinner, and failures must still be ignored (`.catch(() => undefined)` in `DisplayKnowledgeBaseComponent.loadMarkdown`). MX email-domain check and the email gate stay unchanged.

## Current code (wrong for this spec)

`KnowledgeBaseFirestoreService.logAccess` always `addDoc`s with an Auto-ID. Every successful open appends a new document. There is no lookup and no `viewedAt` update.

Firestore rules currently:

```
match /accessLogs/{id} {
  allow create: if true;
  allow read, update, delete: if false;
}
```

Those rules **block** update. Do not implement a client `query` + `update` that would require `allow read: if true` on `accessLogs` (that would let anyone list other visitors’ emails).

## Required approach

Use a **deterministic document ID** derived from `email`, `locale`, and `knowledgeBaseId` (normalize email the same way the gate does: trim + lowercase). Then `setDoc(..., { merge: true })` with `viewedAt: serverTimestamp()`.

- First visit: create (no prior document).
- Repeat visit with the same triple: merge updates `viewedAt` only if rules constrain it; still send the four fields so create and merge share one write path.
- The client must **not** `getDoc` / `query` `accessLogs` (keep `allow read: if false`).
- ID must be a valid Firestore document ID (no `/`). Prefer a stable hash (e.g. SHA-256 hex of `email\0locale\0knowledgeBaseId`, or an equivalent unambiguous encoding). Extract ID generation so it can be unit-tested: same inputs → same ID; different locale or `knowledgeBaseId` → different ID.

Replace `addDoc` / `collection` imports with `doc` + `setDoc` as needed.

## Firestore rules (user must publish)

Tighten client writes. Example intent (adapt to valid rules syntax, no comments in the published rules if you paste them into docs):

- `allow read, delete: if false`
- `allow create: if true` (or validate required string fields and `viewedAt` is request time)
- `allow update: if` the document ID is unchanged and `email`, `locale`, and `knowledgeBaseId` in `request.resource.data` equal `resource.data` (those three fields must not change); `viewedAt` may change

Document the exact rules block in `CHANGELOG.md` / `README.md`. After the code change, tell the user they **must publish** the new rules in the Firebase console for `knowledgebase-store`, and that existing Auto-ID rows will **not** be merged automatically (new upserts use the hashed ID; old visit rows can stay as historical appends unless the user later cleans them up). Do not call undocumented Netlify/Firebase APIs. Do not change Digits / `numbers-55698`.

## Tests and docs

- Unit-test ID generation (and `logAccess` with a mocked Firestore write if that stays simple; do not require a live Firebase project).
- `CHANGELOG.md`: new **Released** section at the top describing upsert vs previous append-only Auto-ID, the ID scheme, rules change, and the leftover Auto-ID documents caveat.
- `README.md`: email-gate / access-log bullets currently say clients may **create** only — update to upsert + no list of other emails.

Do not add source comments. Do not use type assertions (`as`, angle-bracket assertions). Use `Reflect.get` / typeof guards if you touch untyped payloads. Do not implement Firebase Auth email-link verification.
