import * as React from 'react';
import {
  Story,
  Meta
} from '@storybook/react';
import clsx from 'clsx';

import CustomSelect, {
  CustomSelectProps,
  CustomSelectLabel,
  CustomSelectButton,
  CustomSelectOptions,
  CustomSelectOption,
  CustomSelectBody,
  CustomSelectCheck,
  CustomSelectText
} from '.';

const people = [
  {
    id: 1,
    name: 'Wade Cooper',
    avatar:
      // eslint-disable-next-line max-len
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 2,
    name: 'Arlene Mccoy',
    avatar:
      // eslint-disable-next-line max-len
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 3,
    name: 'Devon Webb',
    avatar:
      // eslint-disable-next-line max-len
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
  },
  {
    id: 4,
    name: 'Tom Cook',
    avatar:
      // eslint-disable-next-line max-len
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 5,
    name: 'Tanya Fox',
    avatar:
      // eslint-disable-next-line max-len
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 6,
    name: 'Hellen Schmidt',
    avatar:
      // eslint-disable-next-line max-len
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 7,
    name: 'Caroline Schultz',
    avatar:
      // eslint-disable-next-line max-len
      'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 8,
    name: 'Mason Heaney',
    avatar:
      // eslint-disable-next-line max-len
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 9,
    name: 'Claudie Smitham',
    avatar:
      // eslint-disable-next-line max-len
      'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 10,
    name: 'Emil Schaefer',
    avatar:
      // eslint-disable-next-line max-len
      'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

const Template: Story<CustomSelectProps> = args => {
  const [value, setValue] = React.useState(people[3]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

  return (
    <CustomSelect
      {...args}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      value={value}
      onChange={handleChange}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      {({ open }) => (
        <>
          <CustomSelectLabel>
            Assigned to
          </CustomSelectLabel>
          <CustomSelectBody>
            <CustomSelectButton isOpen={open}>
              <span
                className={clsx(
                  'flex',
                  'items-center',
                  'space-x-3'
                )}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={value.avatar}
                  alt=''
                  className={clsx(
                    'shrink-0',
                    'h-6',
                    'w-6',
                    'rounded-full'
                  )} />
                <CustomSelectText>
                  {value.name}
                </CustomSelectText>
              </span>
            </CustomSelectButton>
            <CustomSelectOptions open={open}>
              {people.map(person => (
                <CustomSelectOption
                  key={person.id}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  value={person}>
                  {({
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    selected,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    active
                  }) => (
                    <>
                      <div
                        className={clsx(
                          'flex',
                          'items-center',
                          'space-x-3'
                        )}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={person.avatar}
                          alt=''
                          className={clsx(
                            'shrink-0',
                            'h-6',
                            'w-6',
                            'rounded-full'
                          )} />
                        <CustomSelectText selected={selected}>
                          {person.name}
                        </CustomSelectText>
                      </div>
                      {selected ? (
                        <CustomSelectCheck active={active} />
                      ) : null}
                    </>
                  )}
                </CustomSelectOption>
              ))}
            </CustomSelectOptions>
          </CustomSelectBody>
        </>
      )}
    </CustomSelect>
  );
};

const Default = Template.bind({});
Default.args = {};

export {
  Default
};

export default {
  title: 'CustomSelect',
  component: CustomSelect
} as Meta;
