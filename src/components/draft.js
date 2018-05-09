// var RecordsComponent = React.createClass({
//     getInitialState: {
//         return {
//             rows: ['row 1', 'row 2', 'row 3']
//         }
//     },
//     render : function() {
//         return (
//             <div>
//                 <table>
//                     {rows.map((r) => (
//                         <tr>
//                             <td>{r}</td>
//                         </tr>
//                     ))}
//                 </table>
//                 <button id="addBtn" onClick={addRow}>ADD</button>
//             </div>
//         );
//     },
//     addRow : function() {
//         var rows = this.state.rows
//         rows.push('new row')
//         this.setState({rows: rows})
//     },
// });

onChange(e) {
    let targ = e.target.name,
        val = e.target.value;

    targ.push(val);
    this.setState({ targ });
}

onSubmit(e) {
    e.preventDefault();
    this.setState({id: this.state.id + 1});
    this.props.login(this.state).then(
        res => this.context.router.push("/"),
        err => this.setState({ errors: err.data.errors, isLoading: false})
    );
}

render() {
    let questionAnswer = this.state.data.map(e => {
        return (
            <TableRow
                index={e.id}
                question={e.question}
                answer={e.answer} />
        )
    });
    return (
        <div className="knowledge_base">
            <input
                id="question"
                name="question"
                onChange={this.onChange}
                className="question_input"
                placeholder="Question"/>
            <input
                id="answer"
                name="question"
                onChange={this.onChange}
                className="answer_input"
                placeholder="Answer"/>
            <button
                className="kb_button"
                onClick={() => this.onSubmit()}>
                + Add new Q&A pair
            </button>
            <div className="knowB_container">
                <table className="knowB_table">
                    
                    {questionAnswer}
                </table>
            </div>
        </div>
    )
}