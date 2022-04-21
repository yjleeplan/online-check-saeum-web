import { Form, Input, message, Modal } from "antd";
import React from "react";
import * as api from "../../../../api";

const UserAddModal = ({ visible, onCancel, setIsLoading }) => {
  // Form Init
  const initialValues = {
    name: "",
    year: "",
    month: "",
    day: "",
    department: null,
  };

  /** Hook */
  const [form] = Form.useForm();

  // 닫기
  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  // 등록
  const handleSave = () => {
    form.submit();
  };

  // Form Submit
  const onFinish = (values) => {
    const params = {
      name: values.name,
      // birthday : `${values.year}-${values.month}-${values.day}`,
      // department: values.department,
    };

    Modal.confirm({
      title: "등록 확인",
      content: "등록하시겠습니까?",
      okText: "확인",
      cancelText: "취소",
      onOk: async () => {
        try {
          setIsLoading(true);
          await api.createUser({
            data: params,
          });

          message.success("정상적으로 등록되었습니다");
          handleCancel();
        } catch (error) {
          message.error(
            error.response
              ? `${error.response.data.code}, ${error.response.data.message}`
              : "등록 실패"
          );
        } finally {
          setIsLoading(false);
        }
      },
    });
  };

  return (
    <Modal
      wrapClassName="user-add-modal-wrap"
      title="출석 명단 등록"
      visible={visible}
      onOk={handleSave}
      onCancel={handleCancel}
      okText="등록"
      cancelText="닫기"
      getContainer={document.getElementById("userAddModal")}
      maskClosable={false}
      destroyOnClose
    >
      <Form
        form={form}
        name="form"
        initialValues={initialValues}
        onFinish={onFinish}
        labelCol={{ span: 4 }}
      >
        <Form.Item
          label="각 가정의 대표자를 입력해주세요"
          required
          className="form-item-wrap"
        >
          <Form.Item
            className="form-item-inner-wrap"
            name="name"
            rules={[
              {
                required: true,
                message: "이름을 입력해주세요",
              },
            ]}
          >
            <Input placeholder="대표자" size="large" suffix="가정" />
          </Form.Item>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserAddModal;
