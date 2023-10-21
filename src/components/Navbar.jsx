import { Button } from "./Input/Button"
import { Input } from "./Input/Input"

export const Navbar = ({ onNewValue }) => {
  return (
    <div className="Nav">
      <h1>DOGs</h1>
      <div className='Input'>
        <Input onNewValue={onNewValue} />
        <Button />
      </div>
    </div>
  )
}
