import { useRef } from 'react';
import { Tag } from 'react-tag-autocomplete';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { Portal } from 'ui/portal/Portal';
import { useMutation } from 'hooks/useMutation/useMutation';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppMessages } from 'i18n/messages';
import { ButtonColor } from 'ui/button/Button.types';
import { AddEntryArguments } from 'api/actions/entry/entryActions.types';
import { TagsInput } from 'ui/tagsInput/TagsInput';
import { addEntry } from 'api/actions/entry/entryActions';
import { useOutsideClick } from 'hooks/useOutsideClick/useOutsideClick';

import { AddModalProps } from './AddModal.types';
import * as Styled from './AddModal.styles';

const urlRegex = new RegExp(
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/,
);

export const AddModal = ({ isFetchingEntries, onClose, onAddition }: AddModalProps) => {
  const { formatMessage } = useLocale();
  const modalRef = useRef<HTMLDivElement>(null);

  const { mutateAsync, isLoading: isAddingEntry } = useMutation(addEntry('add-entry'), {
    onSuccess: () => {
      onAddition();
      toast.success(
        formatMessage({
          id: AppMessages['addModal.additionSuccess'],
        }),
      );
    },
    onError: () => {
      toast.error(
        formatMessage({
          id: AppMessages['error.fallback'],
        }),
      );
    },
  });

  const isLoading: boolean = isAddingEntry || isFetchingEntries;
  useOutsideClick(modalRef, onClose, isLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<Omit<AddEntryArguments, 'tags'> & { tags: Tag[] }>();

  const [title, description] = watch(['title', 'description']);
  const tags = watch('tags', []);

  const validateNewTag = (tag: Tag) => {
    if (tags?.map(({ name }) => name).includes(tag.name)) {
      return false;
    } else return true;
  };

  const onSubmit = handleSubmit((data) => {
    mutateAsync({ ...data, tags: data.tags?.map(({ name }) => name), thumbnail: data.thumbnail || undefined });
  });

  return (
    <Portal>
      <Styled.Overlay>
        <Styled.Wrapper ref={modalRef} data-testid="add-modal">
          <Styled.PillButton
            label={formatMessage({
              id: AppMessages['addModal.backButton'],
            })}
            disabled={isLoading}
            onClick={onClose}
          />
          <Styled.Heading>
            {formatMessage({
              id: AppMessages['home.addEntry'],
            })}
          </Styled.Heading>
          <form onSubmit={onSubmit}>
            <Styled.Input
              id="add-title"
              type="text"
              label={formatMessage({
                id: AppMessages['addModal.title'],
              })}
              placeholder={formatMessage({
                id: AppMessages['addModal.titlePlaceholder'],
              })}
              disabled={isLoading}
              error={errors.title?.message}
              count={title?.length || 0}
              maxLength={200}
              {...register('title', {
                required: formatMessage({
                  id: AppMessages['error.fieldRequired'],
                }),
              })}
            />
            <Styled.Textarea
              id="add-description"
              label={formatMessage({
                id: AppMessages['addModal.description'],
              })}
              placeholder={formatMessage({
                id: AppMessages['addModal.descriptionPlaceholder'],
              })}
              disabled={isLoading}
              count={description?.length || 0}
              error={errors.description?.message}
              maxLength={500}
              {...register('description', {
                required: formatMessage({
                  id: AppMessages['error.fieldRequired'],
                }),
              })}
            />
            <Styled.Input
              id="add-url"
              type="text"
              label="URL"
              placeholder={formatMessage({
                id: AppMessages['addModal.urlPlaceholder'],
              })}
              disabled={isLoading}
              error={errors.resource_url?.message}
              {...register('resource_url', {
                required: formatMessage({
                  id: AppMessages['error.fieldRequired'],
                }),
                pattern: {
                  value: urlRegex,
                  message: formatMessage({
                    id: AppMessages['error.incorrectUrl'],
                  }),
                },
              })}
            />
            <Styled.Input
              id="add-thumbnail"
              type="text"
              label={formatMessage({
                id: AppMessages['addModal.thumbnail'],
              })}
              disabled={isLoading}
              error={errors.thumbnail?.message}
              placeholder={formatMessage({
                id: AppMessages['addModal.thumbnailPlaceholder'],
              })}
              {...register('thumbnail', {
                pattern: {
                  value: urlRegex,
                  message: formatMessage({
                    id: AppMessages['error.incorrectUrl'],
                  }),
                },
              })}
            />
            <TagsInput
              tags={tags}
              onAddition={(tag) => setValue('tags', tags ? [...tags, tag] : [tag])}
              onDelete={(tagIndex) =>
                setValue(
                  'tags',
                  tags.filter((tag, index) => index !== tagIndex),
                )
              }
              disabled={isLoading}
              onValidate={validateNewTag}
              label={formatMessage({
                id: AppMessages['addModal.tags'],
              })}
              placeholderText={
                !tags?.length
                  ? formatMessage({
                      id: AppMessages['addModal.tagsPlaceholder'],
                    })
                  : ''
              }
            />
            <Styled.SubmitWrapper>
              <Styled.ButtonsWrapper>
                <Styled.Button disabled={isLoading} type="submit" color={ButtonColor.blue} data-testid="add-submit">
                  {formatMessage({
                    id: AppMessages['home.addEntry'],
                  })}
                </Styled.Button>
                <Styled.Button
                  disabled={isLoading}
                  type="button"
                  color={ButtonColor.transparent}
                  onClick={onClose}
                  data-testid="add-close"
                >
                  {formatMessage({
                    id: AppMessages['global.cancel'],
                  })}
                </Styled.Button>
              </Styled.ButtonsWrapper>
              {isLoading && <Styled.Loader />}
            </Styled.SubmitWrapper>
          </form>
        </Styled.Wrapper>
      </Styled.Overlay>
    </Portal>
  );
};
