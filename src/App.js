import {useState} from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const StatisticLine = (props) => {
    const {text, value, symbol} = props

    return (
        <tr>
            <td>{text}</td>
            <td>{value} {symbol}</td>
        </tr>
    )
}

StatisticLine.defaultProps = {
    symbol: "", 
}

const Statistics = (props) => {
    const {good, neutral, bad, all, average, positive} = props

    if (all === 0) {
        return (
            <>
                <p>No feedback given</p>
            </>
        )
    }

    return (
        <table>
            <tbody>
                <StatisticLine text="good" value={good} />
                <StatisticLine text="neutral" value={neutral} />
                <StatisticLine text="bad" value={bad} />
                <StatisticLine text="all" value={all} />
                <StatisticLine text="average" value={average} />
                <StatisticLine text="positive" value={positive} symbol="%" />
            </tbody>
        </table>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <>
            <h1>give feedback</h1>

            <Button handleClick={() => setGood(good + 1)} text="good" />
            <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
            <Button handleClick={() => setBad(bad + 1)} text="bad" />

            <h1>statistics</h1>

            <Statistics
                good={good}
                neutral={neutral}
                bad={bad} 
                all={good + neutral + bad} 
                average={(good - bad) / (good + neutral + bad)} 
                positive={(good / (good + neutral + bad)) * 100}
            />
        </>
    )
}

export default App
