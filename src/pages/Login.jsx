import React from 'react'
import { Card, Form, Input, Button, message } from 'antd'

export default function Login(){
  const onFinish = () => {
    message.success('Logged in (demo)')
    window.location.href = '/dashboard'
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Sign in</h2>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="email" label="User Name" rules={[{ required: true }]}> 
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true }]}> 
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">Sign in</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
