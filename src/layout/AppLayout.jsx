import React from 'react'
import { Layout, Menu } from 'antd'
import HeaderBar from '../components/HeaderBar'

const { Sider, Content } = Layout

export default function AppLayout({ children }){
  return (
    <Layout className="min-h-screen">
      <Sider theme="light" width={220} className="p-4">
        <div className="text-lg font-bold mb-6">AntD</div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[{ key: '1', label: 'Employees' }, { key: '2', label: 'Settings' }]}
        />
      </Sider>
      <Layout>
        <HeaderBar />
        <Content className="p-6 bg-gray-50">{children}</Content>
      </Layout>
    </Layout>
  )
}
