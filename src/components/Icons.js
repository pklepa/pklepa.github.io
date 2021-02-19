import styled from "styled-components";

import {
  Github,
  LinkedinSquare,
  Instagram,
  ReactLogo,
  Javascript,
  Nodejs,
  FacebookSquare,
} from "styled-icons/boxicons-logos";

import { ChevronUp } from "styled-icons/boxicons-regular";

import {
  Mail,
  LogoFirebase,
  LogoNpm,
  LogoSass,
} from "styled-icons/ionicons-solid";
import {
  Framer,
  StyledComponents,
  Jest,
  Webpack,
  Mongodb,
  NextDotJs,
} from "styled-icons/simple-icons";
import { ArrowLeftSquare, ArrowRightSquare } from "styled-icons/bootstrap";

export const SocialIcons = {
  github: Github,
  linkedin: LinkedinSquare,
  email: Mail,
  instagram: Instagram,
};

export const SkillIcons = {
  firebase: LogoFirebase,
  "framer-motion": Framer,
  jest: Jest,
  mongodb: Mongodb,
  "next-js": NextDotJs,
  npm: LogoNpm,
  react: ReactLogo,
  sass: LogoSass,
  "styled-components": StyledComponents,
  "vanilla-js": Javascript,
  webpack: Webpack,
};

export const GeneralIcons = {
  arrowUp: ChevronUp,
  arrowLeft: ArrowLeftSquare,
  arrowRight: ArrowRightSquare,
};

export const GithubIcon = styled(Github)``;
export const LinkedinIcon = styled(LinkedinSquare)``;
export const MailIcon = styled(Mail)``;
export const MongodbIcon = styled(Mongodb)``;
export const NextIcon = styled(NextDotJs)``;
export const NodeIcon = styled(Nodejs)``;
export const NpmIcon = styled(LogoNpm)``;
export const InstagramIcon = styled(Instagram)``;
export const ReactIcon = styled(ReactLogo)``;
export const FacebookIcon = styled(FacebookSquare)``;
export const FirebaseIcon = styled(LogoFirebase)``;
export const JestIcon = styled(Jest)``;
export const JavascriptIcon = styled(Javascript)``;
export const FramerIcon = styled(Framer)``;
export const StyledComponentsIcon = styled(StyledComponents)``;
export const SassIcon = styled(LogoSass)``;
export const WebpackIcon = styled(Webpack)``;
export const ArrowLeftIcon = styled(ArrowLeftSquare)``;
export const ArrowRightIcon = styled(ArrowRightSquare)``;
export const ArrowUpIcon = styled(ChevronUp)``;

export const MaterializeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      width="1.96em"
      height="1em"
      style={{
        "-ms-transform": "rotate(360deg)",
        "-webkit-transform": "rotate(360deg)",
        transform: "rotate(360deg)",
      }}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 256 131"
    >
      <g stroke-width=".094">
        <path
          d="M63.182 4.2c.926-1.575 2.13-3.088 3.86-3.83c.71-.123 1.42-.061 2.13-.061h34.957c-1.019.864-2.007 1.76-2.686 2.933c-1.791 2.934-2.996 6.207-4.107 9.48c-3.15 9.883-5.343 20.042-7.474 30.202a729.834 729.834 0 0 0-2.748 13.835c-2.656 15.07-5.404 30.108-8.832 45.023c-1.636 6.887-3.304 13.773-5.836 20.412c-1.174 2.749-2.316 5.682-4.57 7.72c-.525.464-1.05 1.05-1.792.958h-30.88c-2.1-.062-4.169.123-6.269-.093c1.39-1.08 2.625-2.378 3.428-3.922c2.316-4.416 3.767-9.202 5.157-13.958c2.162-7.658 3.89-15.409 5.528-23.16c1.019-5.095 2.223-10.16 2.964-15.286c.834-5.713 2.1-11.364 3.119-17.046c1.606-8.369 3.304-16.737 5.188-25.044c1.513-6.485 3.057-12.94 5.126-19.27c1.02-3.057 2.13-6.083 3.737-8.893z"
          stroke="#f8efd4"
          fill="#f8efd4"
        />
        <path
          d="M104.13.309c.895 0 1.79-.031 2.686 0c1.976 1.05 3.644 2.717 4.57 4.786c1.235 2.347 2.255 4.818 3.18 7.35c3.089 9.542 5.189 19.362 7.289 29.151c1.79 8.77 3.49 17.571 5.095 26.403c.124.463-.03 1.112.587 1.235c-2.224 11.611-4.416 23.253-7.195 34.772c-1.514 6.207-3.12 12.383-5.404 18.374c-1.236 2.995-2.502 6.268-5.127 8.4c-1.667.37-2.872-.896-3.89-2.039c-1.76-2.254-2.842-4.91-3.892-7.566c-3.49-9.51-5.62-19.423-7.781-29.305c-1.637-7.69-3.089-15.44-4.602-23.16c-.68-3.923-1.605-7.783-2.13-11.704c-.093-.062-.31-.186-.402-.247a729.834 729.834 0 0 1 2.748-13.835c2.131-10.16 4.324-20.32 7.474-30.201c1.111-3.274 2.316-6.547 4.107-9.48c.68-1.174 1.667-2.07 2.686-2.934z"
          stroke="#f8f8d4"
          fill="#f8f8d4"
        />
        <path
          d="M142.76 5.651c1.113-2.13 2.471-4.508 4.88-5.311C159.9.278 172.16.309 184.419.309c-1.143 1.142-2.347 2.285-3.12 3.736c-2.377 4.262-3.767 8.987-5.187 13.65c-3.644 12.846-6.207 25.97-8.647 39.094c-2.254 12.94-4.663 25.878-7.411 38.756c-1.42 6.484-2.903 12.938-4.786 19.33c-1.205 3.953-2.47 7.937-4.447 11.612c-.958 1.667-2.07 3.49-3.891 4.354c-11.704.093-23.439 0-35.142.03c-.649 0-1.328 0-1.977-.092c2.625-2.13 3.891-5.404 5.127-8.4c2.285-5.99 3.89-12.166 5.404-18.373c2.779-11.519 4.971-23.16 7.195-34.772c2.686-14.977 5.497-29.954 9.079-44.746c1.667-6.392 3.273-12.877 6.145-18.837z"
          stroke="#f8efd4"
          fill="#f8efd4"
        />
        <path
          d="M184.419.309c.988 0 2.007-.031 2.995 0c1.606.834 2.749 2.254 3.768 3.705c1.667 2.656 2.717 5.652 3.798 8.585c2.563 7.875 4.478 15.966 6.238 24.056c2.347 10.901 4.385 21.864 6.392 32.826c.494 2.625.988 5.28 1.297 7.937l.463.463c-1.111 1.544-1.544 3.397-2.161 5.157c-1.946 6.269-3.212 12.754-4.293 19.208c-.833 5.064-1.976 10.098-3.551 14.977c-1.173 3.613-2.594 7.195-4.94 10.221c-1.113 1.452-2.626 2.563-4.293 3.304c-2.563.278-4.077-2.192-5.312-4.014c-2.563-4.478-3.952-9.48-5.435-14.36c-4.879-18.065-8.06-36.562-11.487-54.936a.812.812 0 0 0-.433-.649c2.44-13.124 5.003-26.248 8.647-39.094c1.42-4.663 2.81-9.388 5.188-13.65c.772-1.451 1.976-2.594 3.119-3.736z"
          stroke="#f8f8d4"
          fill="#f8f8d4"
        />
        <path
          d="M.03 70.562c.804-.062 1.607-.185 2.44-.185h33.66c1.42.185 2.903.062 4.262.68a12.143 12.143 0 0 1 5.033 3.86c.155-.093.433-.34.587-.464c-.741 5.126-1.945 10.19-2.964 15.286c-1.637 7.751-3.366 15.502-5.528 23.16c-1.39 4.756-2.841 9.542-5.157 13.958c-.803 1.544-2.038 2.841-3.428 3.922c-.525.093-.926-.278-1.359-.556c-1.451-.926-2.285-2.532-3.18-3.983c-4.231-9.635-4.694-20.289-7.319-30.356c-1.328-5.033-2.965-10.036-5.373-14.668c-1.483-2.78-3.304-5.435-5.682-7.566c-1.76-1.42-3.799-2.563-5.991-3.088z"
          stroke="#f8f8d4"
          fill="#f8f8d4"
        />
        <path
          d="M212.088 73.774c1.945-2.193 4.848-3.582 7.782-3.459h25.322c3.52.062 7.071-.123 10.592.093c-1.05.71-2.316.988-3.428 1.575c-3.86 1.76-7.164 4.693-9.264 8.368c-3.366 5.868-4.54 12.6-5.528 19.208c-.988 6.485-.957 13.186-3.057 19.486c-1.42 4.416-3.582 8.862-7.319 11.765c-11.61.124-23.222.031-34.802.062c-.772 0-1.513.03-2.254-.124c1.667-.74 3.18-1.852 4.292-3.304c2.347-3.026 3.768-6.608 4.941-10.221c1.575-4.88 2.718-9.913 3.551-14.977c1.081-6.454 2.347-12.94 4.293-19.208c.617-1.76 1.05-3.613 2.161-5.157c.927-1.359 1.544-2.934 2.718-4.107z"
          stroke="#f8efd4"
          fill="#f8efd4"
        />
      </g>
    </svg>
  );
};
