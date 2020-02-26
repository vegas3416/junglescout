@import '~Janus/foundations/Color/main';
@import '~Janus/foundations/Typography/main';

.jobsTemplates {
  padding: 3rem;
  position: relative;

  .sent-view {
    display: flex;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 0;

    &-content {
      background-color: get-color(green, core);
      border-bottom-left-radius: 0.75rem;
      border-bottom-right-radius: 0.75rem;
      color: get-color(white, core);
      font-family: Helvetica Neue;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 18px;

      padding: 0.75rem 1.25rem;
    }
  }

  .header {
    padding-bottom: 1.5rem;
    &-label {
      font-family: Helvetica Neue;
      font-style: normal;
      font-weight: bold;
      font-size: 23px;
      line-height: 28px;
      &-style {
        color: get-color(blue, core);
      }
    }
  }

  &-content {
    position: relative;
    &-image {
      cursor: pointer;
      width: 100%;
    }

    .button {
      position: absolute;
      right: 0;
      height: 50px;
    }

    .shareIcon {
      position: absolute;
      top: 0;
      width: 100%;
      display: flex;
      justify-content: flex-end;

      &-button {
        cursor: pointer;
        width: 38px;
        height: 38px;
        margin-right: 16px;
        margin-top: 7.9rem;

        .share-fill-rect {
          &:hover {
            fill: get-color(blue, pastel);
          }
        }
      }
    }
  }

  .icl-Modal-wrapper {
    .icl-Modal {
      border-radius: 0.5rem;

      .modal-buttons {
        .bottom-buttons {
          align-items: center;
          padding-top: 1rem;
          display: flex;
          justify-content: flex-end;

          .cancel-button {
            cursor: pointer;
            color: get-color(blue, core);
            font-family: Helvetica Neue;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 18px;
            margin-right: 1.25rem;
          }

          .icl-Button {
            padding: 0.25rem 3rem;
          }
        }
      }
    }
  }
}


