const AllVolunteerTableLayout = ({data}) => {
    const {thumbnail, title, email, name} = data
  return (
    <>
      <tr>
        <th>
          <img className="w-12 h-12 rounded-lg" src={thumbnail} alt="" />
        </th>
        <th>{title}</th>
        <th className="hidden lg:flex">{email}</th>
        <th>{name}</th>
      </tr>
    </>
  );
};

export default AllVolunteerTableLayout;
