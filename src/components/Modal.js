
export const Modal = ({ open, close, children }) => {
    return open ? (
        <div
            className="modal-backdrop"
            onClick={() => {
                close()
            }}
        >
            <div
                className="modal-content"
                onClick={e => {
                    e.stopPropagation()
                }}
            >
                <button onClick={close}>Close</button>
                {children}
            </div>
        </div>
    ) : null
}