import React from 'react';
import styled from '@emotion/styled';

import {t} from 'app/locale';
import DropdownControl, {DropdownItem} from 'app/components/dropdownControl';

type Props = {
  selected?: string;
  onSelect: (key: string) => void;
};

const ReleaseListSortOptions = ({selected = 'date', onSelect}: Props) => {
  const filterOptions = [
    {
      key: 'date',
      label: t('Date Created'),
    },
    {
      key: 'crash_free_users',
      label: t('Crash Free Users'),
    },
    {
      key: 'crash_free_sessions',
      label: t('Crash Free Sessions'),
    },
    {
      key: 'sessions_24h',
      label: t('Sessions in 24 Hours'),
    },
  ];

  const label = (
    <React.Fragment>
      <LabelText>{t('Sort by')}: &nbsp; </LabelText>
      {filterOptions.find(filterItem => filterItem.key === selected)?.label}
    </React.Fragment>
  );

  return (
    <DropdownControl label={label}>
      {filterOptions.map(filterItem => (
        <DropdownItem
          key={filterItem.key}
          onSelect={onSelect}
          eventKey={filterItem.key}
          isActive={selected === filterItem.key}
        >
          {filterItem.label}
        </DropdownItem>
      ))}
    </DropdownControl>
  );
};

const LabelText = styled('em')`
  font-style: normal;
  color: ${p => p.theme.gray2};
`;

export default ReleaseListSortOptions;
