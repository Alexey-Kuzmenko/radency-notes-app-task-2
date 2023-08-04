import styles from './MenuToggle.module.scss';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { MouseEventHandler } from 'react';
import { useAppSelector } from '../../hooks';

interface MenuToggleProps {
    onClickHandler: MouseEventHandler
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ onClickHandler }) => {
    const menuIsOpen = useAppSelector((state) => state.menu.menuIsOpen);

    return (
        <div onClick={onClickHandler}>
            {
                menuIsOpen ?
                    <CloseRoundedIcon className={`${styles.MenuToggle} ${styles.MenuToggle_open}`} />
                    :
                    <MenuRoundedIcon className={styles.MenuToggle} />
            }
        </div>
    );
};