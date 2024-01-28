export default function Button({ title, loading = false, loadingText, inactive, children, ...props }) {
    return (
        <button
            disabled={loading || inactive}
            style={{ ...((loading || inactive) && { background: '#f2f2f2', color: '#000000', cursor: 'not-allowed' }) }}
            {...props}
        >
            {loading ? (loadingText ? loadingText : 'Please Wait...') : title || children}
        </button>
    );
}
