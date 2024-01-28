export default function Button({ title, loading = false, ...props }) {
    return (
        <button disabled={loading} {...props}>
            {loading ? 'Please Wait...' : title}
        </button>
    );
}
