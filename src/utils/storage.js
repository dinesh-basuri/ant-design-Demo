// simple localStorage wrapper
const KEY = 'employees_v1'

function _read(){
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : []
  } catch(e) {
    return []
  }
}

function _write(list){
  localStorage.setItem(KEY, JSON.stringify(list))
}

function addEmployee(data){
  const list = _read()
  const id = Date.now().toString()
  list.push({ id, ...data })
  _write(list)
  return id
}

function getAllEmployees(){
  return _read()
}

function updateEmployee(id, data){
  const list = _read()
  const idx = list.findIndex(i=>i.id === id)
  if(idx !== -1){
    list[idx] = { ...list[idx], ...data }
    _write(list)
    return true
  }
  return false
}

function deleteEmployee(id){
  let list = _read()
  list = list.filter(i=>i.id !== id)
  _write(list)
  return true
}

export default { addEmployee, getAllEmployees, updateEmployee, deleteEmployee }
