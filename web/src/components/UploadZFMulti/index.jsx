import { PlusOutlined } from '@ant-design/icons';
import { message, Modal, Space, Upload } from 'antd';
import React, { useState } from 'react'
import { getBase64 } from '../../helpers/GetBase64'

const UploadZFMulti = ({
    fileList,
    setFileList,
    max,
}) => {
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const handlePreviewCancel = () => setPreviewVisible(false)
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj)
        }
        setPreviewImage(file.url || file.preview)
        setPreviewVisible(true)
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf("/") + 1))
    }
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList)
    const props = {
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        }
        ,
        beforeUpload: (file) => {
            setFileList([...fileList, file]);
            return false;
        },
        onPreview: handlePreview,
        onChange: handleChange,
        fileList,
        accept: 'image/png, image/jpeg',
    }
    return (
        <Space
            direction="vertical"
            size="large"
            style={{ width: '100%' }}
        >
            <Upload
                listType="picture-card"
                {...props}
            >
                {fileList && <div>
                    <PlusOutlined />
                    <div
                        style={{
                            marginTop: 8,
                        }}
                    >
                        Upload
                    </div>
                </div>}
            </Upload>
            <Modal visible={previewVisible} footer={null} onCancel={handlePreviewCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                <div>{previewTitle}</div>
            </Modal>
        </Space>
    )
}

export default UploadZFMulti