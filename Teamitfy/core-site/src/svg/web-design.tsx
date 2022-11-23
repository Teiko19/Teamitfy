export const WebDesignSvg = ({
    width = "50px",
    height = "50px",
    viewBox = "0 0 50 50",
    color = "black",
    fillColor = "none",
    className = '',
}) => (
    <div className={className}>
        <svg width={width} height={height} viewBox={viewBox} fill={fillColor} xmlns="http://www.w3.org/2000/svg">
            <path d="M42.1691 6.62719H41.5758C42.7067 4.78611 42.2891 2.31438 40.4742 0.967824C38.5187 -0.482928 35.7397 -0.0159454 34.375 2.02347L31.2944 6.62728H4.83037C2.65512 6.62728 0.885429 8.39698 0.885429 10.5722V35.7938C0.885429 37.9691 2.65512 39.7387 4.83037 39.7387H20.1537L18.9959 44.6016H16.497C14.8685 44.6016 13.5435 45.9265 13.5435 47.5551V48.1718H10.463C9.92363 48.1718 9.48643 48.6091 9.48643 49.1483C9.48643 49.6876 9.92363 50.1249 10.463 50.1249H36.5366C37.0759 50.1249 37.5131 49.6876 37.5131 49.1483C37.5131 48.6091 37.0759 48.1718 36.5366 48.1718H33.4561V47.5551C33.4561 45.9265 32.1311 44.6016 30.5025 44.6016H28.0037L26.8459 39.7387H42.1692C44.3444 39.7387 46.1141 37.9691 46.1141 35.7938V30.2441V10.5721C46.1141 8.39688 44.3444 6.62719 42.1691 6.62719V6.62719ZM28.177 23.7947C26.6502 24.8635 23.7898 23.4107 21.0582 24.8683C20.3917 21.406 20.8119 18.1497 24.2811 17.431C24.7294 17.3375 25.2121 17.2952 25.623 17.3034C26.7972 18.1746 27.9849 19.0557 29.1558 19.9246C29.6684 21.4156 29.476 22.8855 28.177 23.7947ZM29.1611 13.3273L31.9255 15.3783L29.7996 17.9701C28.9244 17.3208 28.1721 16.7626 27.2969 16.1132C27.4787 15.8417 28.995 13.5755 29.1611 13.3273V13.3273ZM35.9983 3.10968C36.738 2.00413 38.2464 1.74691 39.3105 2.53645C40.3749 3.32608 40.5655 4.84421 39.7221 5.87261C38.2255 7.69709 34.6676 12.035 33.1654 13.8665L30.2484 11.7023L35.9983 3.10968ZM31.5029 47.5551V48.1718H15.4966V47.5551C15.4966 47.0035 15.9454 46.5547 16.497 46.5547H30.5024C31.0541 46.5547 31.5029 47.0035 31.5029 47.5551ZM25.9959 44.6016H21.0036L22.1614 39.7387H24.8381L25.9959 44.6016ZM44.1611 35.7938C44.1611 36.8921 43.2675 37.7857 42.1692 37.7857C40.619 37.7857 6.5734 37.7857 4.83047 37.7857C3.73215 37.7857 2.83861 36.8921 2.83861 35.7938V31.2206H5.62919C6.16853 31.2206 6.60573 30.7834 6.60573 30.2441C6.60573 29.7049 6.16853 29.2676 5.62919 29.2676H2.83842V10.5721C2.83842 9.47381 3.73196 8.58027 4.83027 8.58027H29.9875C29.052 9.97839 26.3226 14.0572 25.4581 15.3491C23.5444 15.3664 21.6338 16.0331 20.383 17.4932C18.681 19.48 18.382 22.6018 19.4942 26.7718C19.6844 27.4849 20.5741 27.7403 21.1125 27.2261C23.6375 24.8134 26.7824 27.4451 29.5986 25.1657C31.3177 23.7741 31.7246 21.5619 31.0763 19.4931C31.9526 18.4248 39.1488 9.65115 40.0271 8.58027H42.169C43.2673 8.58027 44.1609 9.47381 44.1609 10.5721V29.2675H13.4413C12.902 29.2675 12.4648 29.7048 12.4648 30.244C12.4648 30.7833 12.902 31.2205 13.4413 31.2205H44.1611V35.7938Z" fill={color}/>
            <path d="M9.34624 29.2864C8.87612 29.3825 8.56108 29.7889 8.56108 30.2446C8.56108 30.8554 9.11958 31.3232 9.72807 31.2016C10.2688 31.0918 10.5982 30.5707 10.4947 30.0531C10.386 29.519 9.86782 29.1815 9.34624 29.2864V29.2864Z" fill={color}/>
        </svg>
    </div>
)