import React, { useState } from "react";
import AppLayout from "../layout/AppLayout";
import { Card, Button, Drawer } from "antd";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const openAdd = () => {
    setEditing(null);
    setOpen(true);
  };
  const openEdit = (emp) => {
    console.log(emp)
    setEditing(emp);
    setOpen(true);
  };
  const close = () => setOpen(false);
  const reload = () => setRefreshKey((k) => k + 1);

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Employees</h1>
          <Button type="primary" onClick={openAdd}>
            Add Employee
          </Button>
        </div>

        <Card>
          <EmployeeTable onEdit={openEdit} refreshKey={refreshKey} />
        </Card>

        <Drawer
          title={editing ? "Edit Employee" : "Add Employee"}
          onClose={close}
          open={open}
          width={520}
          destroyOnClose
        >
          <EmployeeForm
            initialData={editing}
            onClose={() => {
              close();
              reload();
            }}
          />
        </Drawer>
      </div>
    </AppLayout>
  );
}
