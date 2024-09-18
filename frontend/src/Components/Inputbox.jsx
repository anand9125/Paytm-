export const Inputbox =({label,placeholder,onChange})=>{
    return <div>
        <div className="text-sm font-medium text-left py-2">
            {label}
        </div>
        <div>
            <input onChange={onChange} type="text" placeholder={placeholder} className="w-full border rounded border-slate-500 py-1 px-2" />
        </div>

    </div>
}