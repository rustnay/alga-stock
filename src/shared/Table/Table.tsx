import React from 'react'
import organizeData from '../../utils/organizeDataForTable'
import './Table.scss'

export interface TableHeader {
    key: string
    value: string
    right?: boolean
}

declare interface TableProps {
    headers: TableHeader[]
    data: any[]

    enableActions?: boolean

    onDelete?: (item: any) => void
    onDetail?: (item: any) => void
    onEdit?: (item: any) => void
}

const Table: React.FC<TableProps>  = (props) => {
    const [organizedData, indexedHeaders] = organizeData(props.data, props.headers)
    return <table className="AppTable">
        <thead>
            <tr>
               {
                   props.headers.map(header => 
                        <th className={header.right ? 'right' : ''} 
                            key={header.key}
                        > 
                            {header.value} 
                        </th>)
               }
            </tr>
        </thead>
        <tbody>
            {
                organizedData.map((row, index) => {
                    return <tr key={index}> 
                    {
                        Object
                            .keys(row)
                            .map((item, i) =>
                                item !== '$original' ?
                            <td key={row.$original.id + i}
                                className={indexedHeaders[item].right ? 'right' : ''}
                            >
                                {row[item] }
                            </td>
                            : null
                        )
                    }

                    </tr>
                })
            }
        </tbody>
    </table>
}


export default Table
