import { ChangeEvent, useState, useRef, useEffect, useCallback } from 'react';
import * as S from '@/pages/DiaryRegisterPage/DiaryRegisterPage.styles';
import DiaryRecorder from '@/components/molecules/DiaryRecorder/DiaryRecorder';
import { Image } from '@/components/atoms/Image/Image';
import IconPlusBlueRectDash from '@/assets/images/icon-plus-blue-rect-dash.png';
import { useNavigate } from 'react-router-dom';
import backArrow from '@/assets/images/icon-arrow-left-grey.png';
import Button from '@/components/atoms/Button/Button';
import { DiaryPostDto } from '@/types/diaryTypes';
import { useRecoilValue } from 'recoil';
import { BabiesOfUser, User } from '@/types';
import { userInfoState } from '@/states/userState';
import { selectedBabyState } from '@/states/babyState';
import { PATH } from '@/constants/path';
import { useAddDiary } from '@/apis/Diary/Mutations/useAddDiaries';
import { selectedDateState } from '@/states/dateState';

const DiaryRegisterPage = () => {
  const navigate = useNavigate();
  const userInfo: User = useRecoilValue(userInfoState);
  const babyInfo: BabiesOfUser = useRecoilValue(selectedBabyState);
  const selectedDate: string = useRecoilValue(selectedDateState);
  const [files, setFiles] = useState<File[]>([]);
  const [diaryContent, setDiaryContent] = useState<string>('');
  const fileInputRefs = useRef<HTMLInputElement[]>([]);

  const addDiaryMutation = useAddDiary();

  const handleSubmit = async () => {
    const formData = new FormData();
    const diaryPostDto: DiaryPostDto = {
      userId: userInfo?.userId,
      babyId: babyInfo?.babyId,
      content: diaryContent,
      writeDate: selectedDate,
      writeTime:
        new Date().toISOString().slice(0, 10) === selectedDate
          ? '00:00:00'
          : new Date()
              .toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
              })
              .toString(),
    };

    for (let i = 0; i < files.length; i++) {
      formData.append('imgFiles', files[i]);
    }

    formData.append(
      'diaryPostDto',
      new Blob([JSON.stringify(diaryPostDto)], { type: 'application/json' })
    );

    await addDiaryMutation.mutateAsync(formData);
    navigate(PATH.DIARY);
  };

  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const fileList: File[] = event.target.files
      ? Array.from(event.target.files)
      : [];
    if (fileList.length !== 0) {
      setFiles(prevFiles => {
        const newFiles = [...prevFiles];
        newFiles[index] = fileList[0];
        return newFiles;
      });
      event.target.value = '';
    }
  };

  const handleImageClick = (index: number) => {
    if (fileInputRefs.current[index]) {
      fileInputRefs.current[index].click();
    }
  };

  const handleRemoveImage = (index: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const addFileInputRef = (ref: HTMLInputElement | null, index: number) => {
    if (ref) {
      fileInputRefs.current[index] = ref;
    }
  };
  const handleDiaryContent = (data: string) => {
    setDiaryContent(data);
  };

  const RouteHandler = useCallback(() => navigate(-1), [navigate]);
  return (
    <>
      <S.DiaryRegisterContainer>
        <S.DiaryRegisterHeadContainer>
          <S.BackArrow onClick={RouteHandler}>
            <Image src={backArrow} width={1} />
          </S.BackArrow>
          <S.TitleText size="headSmall">육아일기 작성하기</S.TitleText>
        </S.DiaryRegisterHeadContainer>
        <S.DiaryRegisterBodyContainer>
          <DiaryRecorder onDataUpdate={handleDiaryContent}></DiaryRecorder>
        </S.DiaryRegisterBodyContainer>
        <S.DiaryRegisterFileListContainer>
          {files.map((file, index) => (
            <S.DiaryRegisterWrapper key={index}>
              <Image
                src={file && URL.createObjectURL(file)}
                height={100}
                width={100}
                style={{ objectFit: 'cover' }}
                $unit="%"
                onClick={event => handleRemoveImage(index, event)}
              />
              <input
                type="file"
                onChange={event => {
                  handleFileChange(event, index);
                }}
                accept="image/*"
                ref={ref => addFileInputRef(ref, index)}
                style={{ display: 'none' }}
              />
            </S.DiaryRegisterWrapper>
          ))}
          {files.length < 4 && (
            <S.DiaryRegisterWrapper
              onClick={() => handleImageClick(files.length)}
            >
              <Image
                src={IconPlusBlueRectDash}
                height={100}
                width={100}
                $unit="%"
              />
              <input
                type="file"
                onChange={event => {
                  handleFileChange(event, files.length);
                }}
                accept="image/*"
                ref={ref => addFileInputRef(ref, files.length)}
                style={{ display: 'none' }}
              />
            </S.DiaryRegisterWrapper>
          )}
        </S.DiaryRegisterFileListContainer>
        <S.RegisterBtnContainer>
          <Button option="activated" onClick={handleSubmit}>
            등록하기
          </Button>
        </S.RegisterBtnContainer>
      </S.DiaryRegisterContainer>
    </>
  );
};

export default DiaryRegisterPage;
