const FormButtonSeparator = () => {
  return (
    <div
      className="
      flex items-center
      my-5
      text-sm
    "
    >
      <hr
        className="
        w-full
        text-(--form-separator-line-color)
      "
      />
      <p
        className="
        mx-2
        text-(--form-separator-text-color)
      "
      >
        ou
      </p>
      <hr
        className="
        w-full
        text-(--form-separator-line-color)
      "
      />
    </div>
  );
};

export default FormButtonSeparator;
