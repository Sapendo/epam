import React from "react";
import TableRow from "./TableRow";

class KnowledgeBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    question: "WTF?!",
                    answer: "Because"
                }
            ],
            errors: {},
            isLoading: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    loadToPage(question,answer) {
        const copy = this.state.data;
        copy.push({
            question: question,
            answer: answer
        })
        this.setState({data: copy});
    }

filterData(id) {
    const copy = this.state.data;
    let result = copy.filter( a => a.id == id);
}

    onChange(e) {
        const copy = this.state.data;
        let obj = {
            question: "",
            answer: ""
        };
        
        if (e.target.question) obj.
    
        targ.push(val);
        this.setState({ targ });
    }



    render() {
        let index = 0,
            renderRow;
        while (index <= 15) {
            renderRow = function() {
                index++;
                return (
                    <tr className="table_row"
                        id={`pair${index}`}>
                        <td>
                            {index}
                        </td>
                        <td>
                            <input 
                                name="question"
                                className="question_input"
                                onChange={this.onChange}/>
                        </td>
                        <td>
                            <input 
                                name="answer"
                                className="answer_input"
                                onChange={this.OnChange}/>
                        </td>
                    </tr>
                )
            }
        }
        retrun (
            <table className="table_main">
            <th>
                <td>Knowledge Base</td>
            </th>
            <tr>
                <td></td>
                <td>Question</td>
                <td>Answer</td>
            </tr>
            {renderRow}
            </table>
        )
    }

    
}

export default KnowledgeBase;