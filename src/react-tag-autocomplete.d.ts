/* eslint-disable import/no-default-export */

//react-tag-autocomplete definition file to support non-typed "newTagText" prop

import { Component } from 'react';

import {
  Tag,
  TagComponentProps,
  SuggestionComponentProps,
  ClassNames,
  ReactTagsProps as ReactTagsPropsBase,
} from '../node_modules/@types/react-tag-autocomplete/index';

declare module 'react-tag-autocomplete' {
  export interface ReactTagsProps extends ReactTagsPropsBase {
    newTagText?: string;
  }

  export { Tag, TagComponentProps, SuggestionComponentProps, ClassNames };

  export default class ReactTags extends Component<ReactTagsProps> {}
}
