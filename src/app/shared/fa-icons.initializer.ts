import { APP_INITIALIZER, Provider } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAndroid, faDocker, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAward, faGlobe, faHome, faPerson, faXRay } from '@fortawesome/free-solid-svg-icons';

export function provideFaIcons(): Provider {
  return {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: (library: FaIconLibrary) => {
      library.addIcons(faHome, faPerson, faGlobe, faAward, faGithub, faDocker, faXRay, faAndroid);
      return () => undefined;
    },
    deps: [FaIconLibrary],
  };
}
