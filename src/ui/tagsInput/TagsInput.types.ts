import { ReactTagsProps } from 'react-tag-autocomplete';

export type TagsInputProps = {
  label?: string;
  disabled?: boolean;
  error?: string;
  withSuggestions?: boolean;
} & ReactTagsProps;
