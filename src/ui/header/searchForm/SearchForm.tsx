import { useEffect } from 'react';
import { useQueryParam, StringParam, NumberParam } from 'use-query-params';
import { useForm } from 'react-hook-form';

import { useLocale } from 'hooks/useLocale/useLocale';
import { AppMessages } from 'i18n/messages';
import { ReactComponent as IconSubmit } from 'assets/svg/search.svg';
import { ReactComponent as IconClose } from 'assets/svg/close.svg';

import * as Styled from './SearchForm.styles';
import { SearchFormProps } from './SearchForm.types';

export const SearchForm = ({ isVisible, onClose }: SearchFormProps) => {
  const { formatMessage } = useLocale();
  const [search, setSearch] = useQueryParam('search', StringParam);
  const [page, setPage] = useQueryParam('page', NumberParam);
  const { register, handleSubmit, reset, watch } = useForm<{ phrase: string }>({
    defaultValues: {
      phrase: search || undefined,
    },
  });

  const currentPhrase = watch('phrase');

  const onSearchSubmit = handleSubmit(({ phrase }) => {
    setSearch(phrase || undefined);
    setPage(undefined);
  });

  useEffect(() => {
    reset({ phrase: search || undefined });
    if (search) setPage(undefined);
  }, [search]);

  return (
    <Styled.SearchForm onSubmit={onSearchSubmit} isVisible={isVisible}>
      <Styled.SearchInput
        placeholder={formatMessage({
          id: AppMessages['search.inputPlaceholder'],
        })}
        autoComplete="off"
        {...register('phrase')}
      />
      <Styled.SubmitButton isVisible={!!currentPhrase && currentPhrase !== search}>
        <IconSubmit />
      </Styled.SubmitButton>
      <Styled.CloseButton
        type="button"
        isVisible={!currentPhrase || currentPhrase === search}
        onClick={() => onClose()}
      >
        <IconClose />
      </Styled.CloseButton>
    </Styled.SearchForm>
  );
};
