import React from "react";
import {
  useTable,
  List,
  Table,
  IResourceComponentsProps,
} from "@pankod/refine";

import { IUser } from "interfaces";

export const UserList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<IUser>();

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="name" title="Name" />
      </Table>
    </List>
  );
};
