import React, { useRef, useState } from 'react'
import { Modal, Button } from 'antd';
import Draggable from 'react-draggable';

const ModalDraggable = ({ title, open, handleOk, handleCancel, children,footer }) => {
    // const draggleRef = useRef(null);
    const [disabled, setDisabled] = useState(false);
    const [bounds, setBounds] = useState({
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
    });
    const onStart = (_event, uiData) => {
        const { clientWidth, clientHeight } = window.document.documentElement;
        const targetRect = draggleRef.current?.getBoundingClientRect();

        if (!targetRect) {
            return;
        }

        setBounds({
            left: -targetRect.left + uiData.x,
            right: clientWidth - (targetRect.right - uiData.x),
            top: -targetRect.top + uiData.y,
            bottom: clientHeight - (targetRect.bottom - uiData.y),
        });
    };

    return (
        <Modal
            title={
                <div
                    style={{
                        width: '100%',
                        // cursor: 'move',
                    }}
                    // onMouseOver={() => {
                    //     if (disabled) {
                    //         setDisabled(false);
                    //     }
                    // }}
                    // onMouseOut={() => {
                    //     if (!disabled) {
                    //         setDisabled(true);
                    //     }
                    // }}
                    // onFocus={() => { }}
                    // onBlur={() => { }}
                >
                    {title}
                </div>
            }

            visible={open}
            onOk={handleOk}
            onCancel={handleCancel}
            // modalRender={(modal) => (
            //     <Draggable
            //         disabled={disabled}
            //         bounds={bounds}
            //         onStart={(event, uiData) => onStart(event, uiData)}
            //     >
            //         <div ref={draggleRef}>{modal}</div>
            //     </Draggable>
            // )}
            footer={footer}

        >
            {children}
        </Modal>
    )
}

export default ModalDraggable
