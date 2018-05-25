$(document).on('keyup', e => {
  let modal = UIkit.modal('.uk-modal');
  if (e.keyCode === 27 && modal.isActive()) {
    modal.hide();
  }
});
