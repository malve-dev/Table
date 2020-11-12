import React from 'react';
import Table from './Table';

export default {
    component: Table,
    title: 'Table'
}
const Template = args => <Table {...args} />;

export const Primary = Template.bind({});
