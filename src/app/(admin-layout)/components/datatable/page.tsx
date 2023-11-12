import DataTable from '@components/data-table/DataTable'

export default function DataTableComponent() {
    let header = [
        {
          title:'His Nmae',
          field:'Name',
          headertField: 'headerName'
        },
        {
          title:'His Age',
          field:'age',
          headertField: 'headerAge'
        },
      ]
      let tableData = [
        {
          Name: 'abdul',
          age:23
        },
        {
          Name: 'ajom',
          age:43
        }
    ]
    return (
      <div>
        <DataTable tableHeader={header} data={tableData}>
            <DataTable.HeaderSlot name="headerName"><div>--OO--</div></DataTable.HeaderSlot>
            <DataTable.HeaderSlot name="headerAge"><div>--AGE--</div></DataTable.HeaderSlot>
            <DataTable.BodySlot name="Name">--OxO--</DataTable.BodySlot>
        </DataTable>        
      </div>
    )
}