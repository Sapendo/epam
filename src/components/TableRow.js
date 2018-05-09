import React from "react";

const TableRow = (props) => {
    return (
        <tr>
            <td>
                { this.props.index }
            </td>
            <td>
                { this.props.question }
            </td>
            <td>
                { this.props.answer }
            </td>
        </tr>
    );
}

export default TableRow;