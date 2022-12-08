import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService
{
  private static vetorModalId: string[] = [];
  private static prevModelId: string[] = [];
  private static currentModelId: string = null;

  public static show = (id: string) =>
  {
    if(ModalService.vetorModalId.includes(id))
    {
      return;
    }

    ModalService.vetorModalId.push(id);
    if(ModalService.currentModelId != null)
    {
      ModalService.prevModelId.push(ModalService.currentModelId);
    }
    ModalService.currentModelId = id;
  }


  public static hide = (id: string) =>
  {
    if(!ModalService.vetorModalId.includes(id))
    {
      return;
    }

    ModalService.vetorModalId.splice(ModalService.vetorModalId.indexOf(id), 1);
    if(ModalService.prevModelId.length > 0)
    {
      ModalService.currentModelId =
        ModalService.prevModelId.pop();
    }
    else
    {
      ModalService.currentModelId = null;
    }
  }


  public static currentModal = () =>
  {
    return ModalService.currentModelId;
  }


  public static check = (id: string) =>
  {
    return ModalService.vetorModalId.includes(id);
  }


}
