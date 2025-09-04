export type attachSettingType = {
  isSubmit: stringNull
  taskClassCd: stringNull
  taskKey: stringNull
  beforeTaskKey?: stringNull
  isRev?: boolean
}

export type attachInfoPictureType = {
  isSubmit: stringNull
  task: Array<attachInfoPictureTaskType>
}

export type attachInfoPictureTaskType = {
  taskClassCd: stringNull
  taskKey: stringNull
}

export type attachFileType = {
  attachFileId: number
  fileExt: string
  fileDownPath: string
}