import clsx from "clsx";

const formClasses = "block w-full appearance-none rounded-md border border-gray-200 bg-gray-200 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm";

function Label({ children, htmlFor, className }) {
  return (
    <label
      htmlFor={htmlFor} className="mb-3 block text-sm font-medium text-gray-700">
      {children}
    </label>
  )
}

function TextField({
  id,
  label,
  type = "text",
  className = "",
  ...props
}) {
  return (
    <div className={className}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  )
}

function SelectField({
  id,
  label,
  className = "",
  ...props
}) {
  return (
    <div className={className}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <select id={id} {...props} className={clsx("pr-8", formClasses)} />
    </div>
  )
}

export {
  TextField,
  SelectField
}