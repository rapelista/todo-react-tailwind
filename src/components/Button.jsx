function Button(props) {
  const { color = "blue", children, text } = props;
  return (
    <button
      {...props}
      className={`[&>svg]:w-5 [&>svg]:stroke-2 flex center gap-x-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:shadow-xl shadow-zinc-800 hover:bg-blue-700 transition-color duration-700 ease-out`}
    >
      {children || text}
    </button>
  );
}

export default Button;
