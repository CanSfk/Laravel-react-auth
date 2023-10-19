export default function InputError({ message }) {
    return (
        <div className="text-red-500 text-sm">
            <span>{message}</span>
        </div>
    );
}
