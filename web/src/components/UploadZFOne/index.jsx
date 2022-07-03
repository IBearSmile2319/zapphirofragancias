import { PlusOutlined } from '@ant-design/icons';
import { Modal, Space, Upload } from 'antd'
import React, { useState } from 'react'
import { getBase64 } from '../../helpers/GetBase64';

const UploadZFOne = ({
    fileList,
    setFileList,
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
    return (
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Upload
                name="icon"
                listType="picture-card"
                onRemove={(file) => {
                    setFileList("");
                }}
                beforeUpload={(file) => {
                    setFileList(file);
                    return false
                }}
                maxCount={1}
                // fileList={fileList ? [fileList] : []}
                data={fileList}
                onPreview={handlePreview}
                accept= 'image/png, image/jpeg'
            >
                {fileList ? null :
                    <div>
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

export default UploadZFOne
