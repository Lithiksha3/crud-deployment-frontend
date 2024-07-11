export default function UserListRow(props) {
    const { name, password } = props.obj;

    return (
        <tr style={{fontFamily: "Bodoni Moda SC"}} className="border-bottom border-secondary fs-4 text-capitalize">
            <td className="py-3">{name}</td>
            <td className="py-3">{password}</td>
            <td className="py-3">Admin</td>
        </tr>
    );
}