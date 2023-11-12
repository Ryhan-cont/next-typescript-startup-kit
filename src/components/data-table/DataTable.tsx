import React, { ReactNode, Children } from 'react';

interface Props {
  tableHeader: {
    field?: string;
    headertField?: string;
    title?: string;
  }[];
  data: { [key: string]: any }[];
  children?: ReactNode;
}

interface ChildProps {
    name: string;
    children: ReactNode;
}

interface DynamicSlot {
  fields: string[];
  data: { [key: string]: React.ReactNode };
}

const dynamicSlot: DynamicSlot = {
  fields: [],
  data: {},
};

const DataTable: React.FC<Props> & {HeaderSlot: React.FC<ChildProps>; BodySlot: React.FC<ChildProps>} = ({ tableHeader = [], data = [], children }) => {
    tableHeader.map((item)=>{
        if(item.field){
            dynamicSlot.fields.push(item.field)
            dynamicSlot.data[item.field] = null
        }
        if(item.headertField){
            dynamicSlot.fields.push(item.headertField)
            dynamicSlot.data[item.headertField] =  null
        }
    })
    Children.map(children, (child) => {
        if(React.isValidElement(child)) {
            let name = child.props.name;
            if(dynamicSlot.fields.includes(name)){
                dynamicSlot.data[name] = child;
            }
        }
    });

    return (
        <table>
            <thead>
                <tr>
                {tableHeader.map((headerItem: { field?: string; headertField?: string; title?: string }, headerIndex: number) => (
                    <th key={'header-' + headerIndex}>
                    {headerItem.headertField && dynamicSlot.data[headerItem.headertField] != null
                        ? dynamicSlot.data[headerItem.headertField]
                        : headerItem.title}
                    </th>
                ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item: { [key: string]: any }, index: number) => (
                <tr key={'row-' + index}>
                    {tableHeader.map((headerItem: { [key: string]: any }, headerIndex: number) => (
                    <td key={'row-' + index + '-col-' + headerIndex}>{item[headerItem.field]}</td>
                    ))}
                </tr>
                ))}
            </tbody>
        </table>
    );
};

const HeaderSlot: React.FC<ChildProps> = ({ name, children }) => <>{children}</>;
const BodySlot: React.FC<ChildProps> = ({ name, children }) => <>{children}</>;

DataTable.HeaderSlot = HeaderSlot;
DataTable.BodySlot = BodySlot;

export default DataTable;