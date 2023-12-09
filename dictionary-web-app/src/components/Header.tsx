interface Props {
  setFont: React.Dispatch<React.SetStateAction<string>>;
}

function Header ({setFont}:Props) {
  return (
    <header>
      <img src="/images/logo.svg" alt="logo" />
      <div>
        <select aria-label ="Select Font "name="fonts" defaultValue="sans" id="font-select" onChange={e => setFont(e.target.value)}>
          <option value="sans">Sans Serif</option>
          <option value="serif">Serif</option>
          <option value="mono">Mono</option>
        </select>
        <p>theme toggle</p>
      </div>
    </header>
  )
}

export default Header;
