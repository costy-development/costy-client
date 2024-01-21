const extractUserFirstName = (fullname: string): string => {
  const firstName = fullname.split(" ")[0];
  return (
    firstName[0]
      ?.toLocaleUpperCase()
      ?.concat(firstName.slice(1, firstName.length)) || ""
  );
};

export default extractUserFirstName;
