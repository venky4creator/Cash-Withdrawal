// Write your code here
import './index.css'

const DenominationItem = props => {
    const {denominationDetails, updateBalance} = props 
    const {value} = denominationDetails 

    const onClickDenomination = () => {
        updateBalance(value)
    }

    return (
        <li  className="deenomination-item">
            <button type="button" className="denomination-button"
            onClick={onClickDenomination}>{value}</button>
        </li>
    )
}
export default DenominationItem