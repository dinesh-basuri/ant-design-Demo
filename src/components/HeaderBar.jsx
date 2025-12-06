import React from 'react'
import { Layout, Avatar, Space } from 'antd'

const { Header } = Layout

export default function HeaderBar(){
  return (
    <Header className="!bg-white !px-6 !py-3 shadow-sm flex items-center justify-end">
      <Space>
        <div className="text-sm">Dinesh (Demo)</div>
        <Avatar>DK</Avatar>
      </Space>
    </Header>
  )
}
