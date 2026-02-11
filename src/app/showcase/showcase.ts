import { Component } from '@angular/core';
import { ShowcaseBasicButton } from '../showcase/showcase-basic-button/showcase-basic-button';
import { ShowcaseOutlineButton } from '../showcase/showcase-outline-button/showcase-outline-button';
import { ShowcaseIntermidiateInput } from '../showcase/showcase-intermidiate-input/showcase-intermidiate-input';
import { ShowcaseHeader } from '../showcase/showcase-header/showcase-header';
import { ShowcaseFooter } from '../showcase/showcase-footer/showcase-footer';
import { ShowcaseInfoMessage } from '../showcase/showcase-info-message/showcase-info-message';
import { ShowcaseForm } from '../showcase/showcase-form/showcase-form';
import { ShowcaseDropdown } from '../showcase/showcase-dropdown/showcase-dropdown';

@Component({
  selector: 'app-showcase',
  imports: [
    ShowcaseBasicButton,
    ShowcaseOutlineButton,
    ShowcaseIntermidiateInput,
    ShowcaseHeader,
    ShowcaseFooter,
    ShowcaseInfoMessage,
    ShowcaseForm,
    ShowcaseDropdown,
  ],
  templateUrl: './showcase.html',
  styles: ``,
})
export class Showcase {}
