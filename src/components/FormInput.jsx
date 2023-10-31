export default function FormInput({label, type, value, id, onChange, placeholder}){
    return <>
        <label className='label' htmlFor={id}>{label}</label>
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            className='input'
            required
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
    </>
}