import React, {useState} from 'react';

import Modal from 'react-native-modal';
import {Text} from 'react-native';
import styled from 'styled-components/native';

//최외각에서 뷰들을 감싸는 Constainer
const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledModalContainer = styled.View`
  flex-direction: column;
  align-items: center;
  /* 모달창 크기 조절 */
  width: 320px;
  height: 220px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
`;

const StyledModalButton = styled.TouchableOpacity`
  /* Modal Button들의 모달창 내의 높이를 균일하게 하기 위하여 flex를 줌 */
  flex: 1;
  width: 320px;
  justify-content: center;
`;

// 모달창 내에서 버튼으로 활용되지 않는 타이틀 부분은 View 만듬
const StyledModalGradeWrapper = styled.View`
  flex: 1;
  width: 320px;
  justify-content: center;
`;

const StyledModalGradeText = styled.Text`
  align-self: center;
  font-size: 15px;
`;

const StyledModalText = styled.Text`
  align-self: center;
  color: blue;
  font-size: 15px;
`;

//React Native 요소 중에서 CSS에서 hr 태그 같은 요소를 몰라서 View로 구현... 더 좋은 방법이 있다면 알려주세요
const HorizentalLine = styled.View`
  background-color: black;
  height: 1px;
  align-self: stretch;
`;

const StyledModalOpenButton = styled.TouchableOpacity`
  height: 50px;
  width: 60%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 1);
`;

const StyledModalOutputText = styled.Text`
  color: black;
  font-size: 30px;
`;

const Screen = (Props: any): React.ReactElement => {
  //State를 이용하여 Modal을 제어함
  const [modalVisible, setModalVisible] = useState < boolean > false;
  //Output을 State로 받아서 화면에 표출하거나 정보 값으로 활용
  const [modalOutput, setModalOutput] = useState < string > 'Open Modal';
  return (
    <StyledSafeAreaView>
      {/* Modal이 StyledModalOpenButto의 아래에 있더라도 무관함. Container안에 들어가만 있으면 됨 */}
      <Modal
        //isVisible Props에 State 값을 물려주어 On/off control
        isVisible={modalVisible}
        //아이폰에서 모달창 동작시 깜박임이 있었는데, useNativeDriver Props를 True로 주니 해결되었다.
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <StyledModalContainer>
          <StyledModalGradeWrapper>
            <StyledModalGradeText>선택지</StyledModalGradeText>
          </StyledModalGradeWrapper>

          <HorizentalLine />

          <StyledModalButton
            onPress={() => {
              setModalOutput('선택 1');
              setModalVisible(false);
            }}>
            <StyledModalText>선택 1</StyledModalText>
          </StyledModalButton>

          <HorizentalLine />

          <StyledModalButton
            onPress={() => {
              setModalOutput('선택 2');
              setModalVisible(false);
            }}>
            <StyledModalText>선택 2</StyledModalText>
          </StyledModalButton>

          <HorizentalLine />

          <StyledModalButton
            onPress={() => {
              setModalOutput('선택 3');
              setModalVisible(false);
            }}>
            <StyledModalText>선택 3</StyledModalText>
          </StyledModalButton>

          <HorizentalLine />

          <StyledModalButton
            onPress={() => {
              setModalOutput('선택 4');
              setModalVisible(false);
            }}>
            <StyledModalText>선택 4</StyledModalText>
          </StyledModalButton>

          <HorizentalLine />

          <StyledModalButton
            onPress={() => {
              setModalVisible(false);
            }}>
            <Text style={{alignSelf: 'center'}}>취소</Text>
          </StyledModalButton>
        </StyledModalContainer>
      </Modal>

      <StyledModalOpenButton
        onPress={() => {
          setModalVisible(true);
        }}>
        {/* 모달에서 선택 결과 값을 State로 받아서 화면에 표시 */}
        <StyledModalOutputText> {modalOutput}</StyledModalOutputText>
      </StyledModalOpenButton>
    </StyledSafeAreaView>
  );
};

export default Screen;
