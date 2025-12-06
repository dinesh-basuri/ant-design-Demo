import React, { useEffect, useState } from 'react'
import { Table, Tag, Space, Button, Popconfirm } from 'antd'
import storage from '../utils/storage'

export default function EmployeeTable({ onEdit, refreshKey }){
  const [data, setData] = useState([])

  useEffect(()=>{
    setData(storage.getAllEmployees())
  }, [refreshKey])

  const remove = (id) => {
    storage.deleteEmployee(id)
    setData(storage.getAllEmployees())
  }

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Role', dataIndex: 'role', key: 'role', render: r => <Tag>{r}</Tag> },
    { title: 'Joined', dataIndex: 'dateOfJoining', key: 'dateOfJoining', render: d => d ? new Date(d).toLocaleDateString() : '-' },
    { title: 'Actions', key: 'actions', render: (_, row) => (
      <Space>
        <Button onClick={()=> onEdit(row)}>Edit</Button>
        <Popconfirm title="Delete?" onConfirm={()=>remove(row.id)}>
          <Button danger>Delete</Button>
        </Popconfirm>
      </Space>
    ) }
  ]

  return <Table columns={columns} dataSource={data.map(d=>({...d, key: d.id}))} />
}
