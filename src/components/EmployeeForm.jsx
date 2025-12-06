import React, { useEffect } from "react";
import { Form, Input, Select, DatePicker, Button, message } from "antd";
import storage from "../utils/storage";
import dayjs from "dayjs";

export default function EmployeeForm({ initialData, onClose }) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialData) {
      form.setFieldsValue({
        ...initialData,
        dateOfJoining: initialData.dateOfJoining
          ? dayjs(initialData.dateOfJoining)
          : null,
      });
    } else {
      form.resetFields();
    }
  }, [form, initialData]);

  const onFinish = (values) => {
    const data = { ...values };
    if (values.dateOfJoining)
      data.dateOfJoining = values.dateOfJoining.toISOString();

    if (initialData?.id) {
      storage.updateEmployee(initialData.id, data);
      message.success("Employee updated");
    } else {
      storage.addEmployee(data);
      message.success("Employee added");
    }
    if (onClose) onClose();
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item name="name" label="Full name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, type: "email" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="role" label="Role" rules={[{ required: true }]}>
        <Select
          options={[
            { value: "Developer", label: "Developer" },
            { value: "Manager", label: "Manager" },
            { value: "HR", label: "HR" },
          ]}
        />
      </Form.Item>

      <Form.Item name="dateOfJoining" label="Date of joining">
        <DatePicker className="w-full" />
      </Form.Item>

      <Form.Item>
        <div className="flex gap-2">
          <Button htmlType="submit" type="primary">
            Save
          </Button>
          <Button
            onClick={() => {
              if (onClose) onClose();
            }}
          >
            Cancel
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}
